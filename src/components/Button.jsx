import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  ...props
}) {
  const cls = `btn btn--${variant} ${className}`

  const inner =
    variant === 'primary' ? (
      <>
        <span className="btn__overlay" aria-hidden="true" />
        <span className="btn__label">{children}</span>
      </>
    ) : (
      children
    )

  if (to) return <Link to={to} className={cls} {...props}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...props}>{inner}</a>
  return <button className={cls} onClick={onClick} {...props}>{inner}</button>
}
