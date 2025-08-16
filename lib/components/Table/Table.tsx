import styles from "./Table.module.css";

type TableProps = {
  children?: React.ReactNode;

  className?: string;
};
export function Table({ children, className }: TableProps) {
  return (
    <table className={styles.table + " " + (className || "")}>{children}</table>
  );
}

type TableHeadProps = {
  children?: React.ReactNode;

  className?: string;
};
export function TableHead({ children, className }: TableHeadProps) {
  return (
    <thead className={styles.tableHead + " " + (className || "")}>
      {children}
    </thead>
  );
}

type ThProps = {
  children?: React.ReactNode;

  className?: string;
};
export function Th({ children, className }: ThProps) {
  return <th className={styles.th + " " + (className || "")}>{children}</th>;
}

type TdProps = {
  children?: React.ReactNode;

  className?: string;
};
export function Td({ children, className }: TdProps) {
  return <td className={styles.td + " " + (className || "")}>{children}</td>;
}
