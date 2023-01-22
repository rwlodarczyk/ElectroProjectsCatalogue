import React from 'react'

const CurrentDateSpan = () => {
  const cd = new Date();
  const stringDate = cd.toLocaleTimeString('en-US', {weekday:"short",month:"short",day:"2-digit",year:'numeric', hour: '2-digit',minute: '2-digit',second:'2-digit',hour12:false});
  return (
    <span className="R-SubTitleTypography">{stringDate} user rwlodarczyk wrote:</span>
  )
}

export default CurrentDateSpan