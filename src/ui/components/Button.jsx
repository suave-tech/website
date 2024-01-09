import Link from "next/link"
import ArrowIcon from "@/ui/layouts/icons/Arrow";

const Button = ({ className, link, children, type, onClick, arrow = true }) => {
  function determineCss() {
    switch(type) {
      case 'link': return "mil-link mil-muted mil-arrow-place";
      default: return "mil-button mil-arrow-place mil-btn-space";
    }
  }

  if(link) {
    return (
      <Link href={link} className={[determineCss(), className ?? ""].join(" ")}>
      <span>{children}</span>
      {arrow && (
      <ArrowIcon />

      )}
  </Link>
    )
  }
  return (
<button onClick={onClick} className={[determineCss(), className ?? ""].join(" ")}>
<span>{children}</span>
{arrow && (
      <ArrowIcon />

      )}
</button>
  )
}

export default Button;