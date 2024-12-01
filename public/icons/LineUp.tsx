type IIconProps = {
    baseColor?: string;
  } & React.SVGProps<SVGSVGElement>;
  
  export const LineUp = (props: IIconProps) => {
    const { baseColor } = props;
  
    return (
      <svg
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        {...props}
      >      
        <path d="M17.5 5L13.0893 9.41074C12.7638 9.73618 12.2362 9.73618 11.9107 9.41074L10.5893 8.08926C10.2638 7.76382 9.73618 7.76382 9.41074 8.08926L5.83333 11.6667" stroke={baseColor ?? "#F7F7F7"} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 2.5V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5H17.5" stroke={baseColor ?? "#F7F7F7"} strokeWidth="1.66667" strokeLinecap="round"/>
      </svg>
    );
  };
  