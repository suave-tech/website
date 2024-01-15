import Link from "next/link"
import ArrowIcon from "@/src/ui/icons/Arrow";
import SuccessSvg from "../icons/Success";

const Button = ({ className, link, children, type, onClick, buttonType, loading, arrow = true }) => {
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
<button onClick={onClick} className={[determineCss(), className ?? ""].join(" ")} type={buttonType}>
<span>{children}</span>
{arrow && (
      (loading || children === 'Response received') ? 
        <div style={{ 
          padding: '0.6rem', 
          backgroundColor: 'black', 
          marginLeft: '1.5rem',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'   
        }}>
          {children === 'Response received' ? (
            <SuccessSvg />
          ) : (
            <div 
            className="loading-spinner" 
            style={{
              backgroundColor: 'black',
            }} 
          /> 
          )}
        </div>
        : 
        <ArrowIcon />
      )}
</button>
  )
}

export default Button;