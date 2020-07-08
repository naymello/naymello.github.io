import React from 'react'

const Logo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 250 250"
      fill={props.backgroundColor}
    >
      <g transform="translate(-342 -705)">
        <path d="M0 0H250V250H0z" transform="translate(342 705)"></path>
        <path
          fill={props.logoColor}
          d="M148.011 0v46.209L127.2 0h-20.253L86.005 46.209V0H62.138L23.251 58.836V0H0v95.846h23.251l38.887-59.379v59.379h23.867l31.345-66.765 30.661 66.764h23.406V0z"
          data-name="logo"
          transform="rotate(90 -114.577 629.423)"
        ></path>
      </g>
    </svg>
  )
}

export default Logo
