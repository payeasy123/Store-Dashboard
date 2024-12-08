type IIconProps = {
    baseColor?: string;
  } & React.SVGProps<SVGSVGElement>;
  
  export const Shopping_cart = (props: IIconProps) => {
    const { baseColor } = props;
  
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#E5D5F2"/>
            <path d="M10.25 11H11.6357C12.1454 11 12.5914 11.3427 12.7227 11.8351L13.1059 13.2721M15.5 22.25C13.8431 22.25 12.5 23.5931 12.5 25.25H28.25M15.5 22.25H26.7183C27.8394 19.9494 28.8177 17.5664 29.6417 15.1125C24.88 13.8965 19.8905 13.25 14.75 13.25C14.2002 13.25 13.6521 13.2574 13.1059 13.2721M15.5 22.25L13.1059 13.2721M14 28.25C14 28.6642 13.6642 29 13.25 29C12.8358 29 12.5 28.6642 12.5 28.25C12.5 27.8358 12.8358 27.5 13.25 27.5C13.6642 27.5 14 27.8358 14 28.25ZM26.75 28.25C26.75 28.6642 26.4142 29 26 29C25.5858 29 25.25 28.6642 25.25 28.25C25.25 27.8358 25.5858 27.5 26 27.5C26.4142 27.5 26.75 27.8358 26.75 28.25Z" stroke="#7B2CBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
    );
  };
  