type IIconProps = {
    baseColor?: string;
  } & React.SVGProps<SVGSVGElement>;
  
  export const ArrowRightIcon = (props: IIconProps) => {
    const { baseColor } = props;
  
    return (
      <svg
        width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M13.8125 1.5625L17.25 5M17.25 5L13.8125 8.4375M17.25 5H0.75" stroke={baseColor ?? "#F7F7F7"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  };
  