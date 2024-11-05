type IIconProps = {
  baseColor?: string;
} & React.SVGProps<SVGSVGElement>;

export const DashboardIcon = (props: IIconProps) => {
  const { baseColor } = props;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.3333 7.09935V3.31602C18.3333 2.14102 17.8 1.66602 16.475 1.66602H13.1083C11.7833 1.66602 11.25 2.14102 11.25 3.31602V7.09102C11.25 8.27435 11.7833 8.74102 13.1083 8.74102H16.475C17.8 8.74935 18.3333 8.27435 18.3333 7.09935Z"
        fill={baseColor ?? "#B1B1B1"}
      />
      <path
        d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
        fill={baseColor ?? "#B1B1B1"}
      />
      <path
        d="M8.75008 7.09935V3.31602C8.75008 2.14102 8.21675 1.66602 6.89175 1.66602H3.52508C2.20008 1.66602 1.66675 2.14102 1.66675 3.31602V7.09102C1.66675 8.27435 2.20008 8.74102 3.52508 8.74102H6.89175C8.21675 8.74935 8.75008 8.27435 8.75008 7.09935Z"
        fill={baseColor ?? "#B1B1B1"}
      />
      <path
        d="M8.75008 16.475V13.1083C8.75008 11.7833 8.21675 11.25 6.89175 11.25H3.52508C2.20008 11.25 1.66675 11.7833 1.66675 13.1083V16.475C1.66675 17.8 2.20008 18.3333 3.52508 18.3333H6.89175C8.21675 18.3333 8.75008 17.8 8.75008 16.475Z"
        fill={baseColor ?? "#B1B1B1"}
      />
    </svg>
  );
};
