interface HeaderColumnProps {
  title: string;
}

export const HeaderColumn = ({ title }: HeaderColumnProps) => {
  return (
    <th
      style={{
        border: '2px solid black',
        width: '7rem',
      }}
    >
      {title}
    </th>
  );
};
