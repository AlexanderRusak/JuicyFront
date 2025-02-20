import React, {
  createRef, FC, MouseEvent, ReactNode, RefObject, useEffect, useLayoutEffect, useMemo, useRef, useState
} from 'react';
import './Tabs.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { ITab } from '../../../types';

export interface ITabsProps {
  /** Список вкладок */
  list: ITab[];
  /** Вид табов */
  type?: 'underline' | 'buttons';
  /** Если во вкладках есть url, то через children пробрасывается <Router/> */
  children?: ReactNode | ReactNode[];
}

const Tabs: FC<ITabsProps> = ({ list, type = 'underline', children }: ITabsProps) => {
  const history = useHistory();
  const { pathname } = useLocation();

  /** Ссылки на вкладки */
  const refs = useRef<RefObject<HTMLDivElement>[]>([]);
  /** Ссылка на линию */
  const lineRef = useRef<HTMLDivElement>(null);

  /** Определяем, если вкладки являются ссылками для роутинга */
  const isRouting: boolean = useMemo(() => list.every((t: ITab) => t.url), [list]);

  // -------------------------------------------------------------------------------------------------------------------

  /** Управление полоской */
  const setLinePosition = (element: HTMLDivElement) => {
    if (lineRef.current) {
      const width = element.offsetWidth;
      const x = element.offsetLeft;

      lineRef.current.style.left = `${x}px`;
      lineRef.current.style.width = `${width}px`;
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  /** Определяем активную вкладку */
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    setActive((i: number) => {
      const index = list.findIndex((t: ITab) => {
        return isRouting ? t.url === pathname : t.active;
      });

      return index >= 0 && !list[index].disabled ? index : i;
    });
  }, [list, pathname, isRouting]);

  /** Устанавливаем активную вкладку */
  const onClick = (e: MouseEvent, i: number, element: HTMLDivElement | null) => {
    element && setLinePosition(element);

    if (isRouting && list[i].url) {
      history.push(list[i].url as string);
    }

    setActive(i);

    if (list[i]?.handler) {
      // @ts-ignore
      list[i].handler(refs.current[i].current);
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  /** Список вкладок */
  const nav = list.map((t: ITab, i: number) => {
    if (!refs.current[i]) {
      refs.current[i] = createRef();
    }

    const className = `${i === active ? 'rf-tabs__button--active' : ''}`;
    const handler = (e: MouseEvent) => onClick(e, i, refs.current[i].current);

    return (
      <div key={ i } className='rf-tabs__link' ref={ refs.current[i] }>
        <button type='button' className={ `rf-tabs__button ${className}` } disabled={ t.disabled } onClick={ handler }>
          { t.label }
        </button>
      </div>
    );
  });

  /** Устанавливаем линию на активную вкладку при инициализации */
  useLayoutEffect(() => {
    if (nav.length > 0 && refs.current[active].current) {
      const element = refs.current[active].current;
      element && setLinePosition(element);
    }
  }, [nav]);

  // -------------------------------------------------------------------------------------------------------------------

  const typeClass = type === 'buttons' ? 'rf-tabs--buttons' : '';

  return (
    <div className={ `rf-tabs ${typeClass}` }>
      <nav className={ 'rf-tabs__navigation ' }>
        <div className='rf-tabs__navigation-list'>{ nav }</div>
        <div className='rf-tabs__navigation-line' ref={ lineRef }/>
      </nav>
      {
        ((isRouting && children) || (!isRouting && list.length > 0)) && (
          <div className='rf-tabs__content'>{ isRouting && children ? children : list[active].tab }</div>
        )
      }
    </div>
  );
};

export default Tabs;
