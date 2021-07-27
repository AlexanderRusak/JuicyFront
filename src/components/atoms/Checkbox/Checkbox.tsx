import React, { FC, InputHTMLAttributes } from 'react';
import './Checkbox.scss';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Лейбл */
  label?: React.ReactNode;
  /** Значение */
  value?: string;
  /** Отображение иконки */
  icon?: boolean;
  /** Вертикальное выравнивание */
  align?: 'flex-start' | 'center' | 'flex-end';
  /** Если дочерние чекбоксы чекнуты, флаг равен true */
  halfChecked?: boolean;
  /** Положение чекбокса */
  position?: 'left' | 'right';
  /** Круглый чекбокс */
  round?: boolean;
  /** 100% ширины */
  fullWidth?: boolean;
}

const Checkbox: FC<ICheckboxProps> = ({
  label,
  value,
  icon = true,
  align = 'flex-start',
  halfChecked = false,
  position = 'left',
  round = false,
  fullWidth = false,
  ...props
}: ICheckboxProps) => {

  const roundClass = round ? 'rf-checkbox__check--round' : '';
  const fullWidthClass = fullWidth ? 'rf-checkbox__check--fullWidth' : '';

  /** Отображение иконки */
  const checkIcon = !halfChecked && icon && (
    <span className={`rf-checkbox__check ${roundClass}`}>
      <span className='rf-checkbox__mark'>
        -
      </span>
    </span>
  );

  /** Иконка полу-чека */
  const halfCheckIcon = halfChecked && icon && (
    <span className='rf-checkbox__half-check'>
      -
    </span>
  );

  const disabledClass = props.disabled ? 'disabled' : '';
  const alignClass: Record<string, string> = {
    'flex-start': 'rf-checkbox--flex-start',
    'center': 'rf-checkbox--center',
    'flex-end': 'rf-checkbox--flex-end',
  };
  const showIconClass = icon ? '' : 'rf-checkbox__label--no-icon';
  const positionClass = position === 'left' ? 'rf-checkbox--left' : 'rf-checkbox--right';

  return (
    <label className={`rf-checkbox ${props.className || ''} ${disabledClass} ${alignClass[align]} ${positionClass} ${fullWidthClass}`}>
      <input {...props} type='checkbox' className='rf-checkbox__input' value={value}/>

      {checkIcon}
      {halfCheckIcon}

      {label && <div className={`rf-checkbox__label ${showIconClass}`}>{label}</div>}
    </label>
  );
};

export default Checkbox;
