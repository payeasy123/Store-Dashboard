type IIconProps = {
    baseColor?: string;
  } & React.SVGProps<SVGSVGElement>;
  
  export const Revenue = (props: IIconProps) => {
    const { baseColor } = props;
  
    return (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1.66699" width="16" height="10.6667" rx="2" stroke="#43A765" stroke-width="1.77778"/>
            <path d="M3.66699 4.33398H5.44477" stroke="#43A765" stroke-width="1.77778" stroke-linecap="round"/>
            <path d="M12.5557 9.66699H14.3334" stroke="#43A765" stroke-width="1.77778" stroke-linecap="round"/>
            <circle cx="8.99967" cy="7.00065" r="1.77778" stroke="#43A765" stroke-width="1.77778"/>
        </svg>     
    );
  };
  