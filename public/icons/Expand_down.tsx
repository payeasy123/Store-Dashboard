type IIconProps = {
    baseColor?: string;
  } & React.SVGProps<SVGSVGElement>;
  
  export const Expand_down = (props: IIconProps) => {
    const { baseColor } = props;
  
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9L12 15L6 9" stroke="#9C9C9C" stroke-width="2"/>
        </svg> 
    );
  };
  