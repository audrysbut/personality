interface HeaderColumnProps {
  title: string;
}

export const HeaderColumn = ({ title }: HeaderColumnProps) => {
  return (
    <th
      className={`border-solid border-2 border-black text-center w-32 select-none`}
    >
      {title}
    </th>
  );
};
