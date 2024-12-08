type IIconProps = {
    baseColor?: string;
  } & React.SVGProps<SVGSVGElement>;
  
  export const Vector = (props: IIconProps) => {
    const { baseColor } = props;
  
    return (
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5625 6.25V2.8125C6.5625 2.26549 6.7798 1.74089 7.16659 1.35409C7.55339 0.967298 8.07799 0.75 8.625 0.75H14.125C14.672 0.75 15.1966 0.967298 15.5834 1.35409C15.9702 1.74089 16.1875 2.26549 16.1875 2.8125V15.1875C16.1875 15.7345 15.9702 16.2591 15.5834 16.6459C15.1966 17.0327 14.672 17.25 14.125 17.25H8.625C8.07799 17.25 7.55339 17.0327 7.16659 16.6459C6.7798 16.2591 6.5625 15.7345 6.5625 15.1875V11.75M10 6.25L12.75 9M12.75 9L10 11.75M12.75 9H1.0625" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
    );
  };
  