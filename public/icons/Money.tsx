type IIconProps = {
    baseColor?: string;
  } & React.SVGProps<SVGSVGElement>;
  
  export const Money = (props: IIconProps) => {
    const { baseColor } = props;
  
    return (
        <svg
            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            {...props}
        >      
            <rect x="3.3335" y="5.55566" width="13.3333" height="8.88889" rx="2" stroke="#B2B2B2" stroke-width="1.77778"/>
            <path d="M5.55566 7.77832H7.03715" stroke="#B2B2B2" stroke-width="1.77778" stroke-linecap="round"/>
            <path d="M12.9629 12.2227H14.4444" stroke="#B2B2B2" stroke-width="1.77778" stroke-linecap="round"/>
            <circle cx="10.0001" cy="10.0005" r="1.33333" stroke="#B2B2B2" stroke-width="1.77778"/>
        </svg>
    );
  };
  