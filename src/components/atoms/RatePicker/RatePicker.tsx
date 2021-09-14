import React, {
  FC, InputHTMLAttributes, useState, useEffect
} from 'react';
import './RatePicker.scss';

export interface IPickerProps extends InputHTMLAttributes<HTMLLabelElement> {

  /** Величина диапазона*/
  sizePicker?: number
  /** Заданное значение выбранного диапазона*/
  defaultPickedValue?: number

  /** Текст контента диапазона*/
  textContent?: string,
  /** Нижнее подчеркивание*/
  isUnderline?: boolean

  /** Реверсировать поярдок диапазона*/
  isReverse?: boolean
  /** Получить значение оценки*/
  getRate?: (value: string) => number | void
}


const RatePicker: FC<IPickerProps> = ({ defaultPickedValue = 0, getRate = () => { }, sizePicker = 10, textContent = '', isUnderline = true, isReverse = false, ...props }: IPickerProps) => {

  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(defaultPickedValue);
  });


  if (sizePicker < 1) {
    sizePicker = 1;
  }

  const rates = Array.from(Array(sizePicker), (_, index) => index + 1);

  if (isReverse) {
    rates.reverse();
  }

  const clickRateHandler = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (typeof e?.currentTarget?.textContent === 'string') {
      setRating(+e.currentTarget.textContent);
      getRate(e.currentTarget.textContent);
    } else {
      setRating(0);
    }
  };

  return (
    <div className={isUnderline ? 'fs-rate-picker' : ''} >
      <p className='fs-rate-content'>{textContent}</p>
      <div className='fs-rate-picker-items'>
        {
          rates.map((item) => <div key={item.toString()} className={`rf-rate-picker-item ${item === 1 && 'rf-rate-picker-item-rounded-left'} ${rates.length === item && 'rf-rate-picker-item-rounded-right'}`} >
            <input type='radio' id={`input-${item}`} value={item} />
            <label className={+rating >= item ? 'rf-rate-picked' : ''} onClick={clickRateHandler} htmlFor={`input-${item}`} {...props}>{item}</label>
          </div >)
        }
      </div>

    </div >
  );
};
export default RatePicker;
