import { Table, Avatar } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa6";
import { tableData } from "../../../data/table";

export const Tables = () => {
  return (
    <Table.Root size="sm" striped>
      <Table.ColumnGroup>
        <Table.Column htmlWidth="50%" />
        <Table.Column htmlWidth="40%" />
        <Table.Column />
      </Table.ColumnGroup>
      <Table.Header pl={4}>
        <Table.Row>
          <Table.ColumnHeader style={{ color: "#9ca3af" }} px={8}>
            USER
          </Table.ColumnHeader>
          <Table.ColumnHeader style={{ color: "#9ca3af" }}>
            COMMIT
          </Table.ColumnHeader>
          <Table.ColumnHeader style={{ color: "#9ca3af" }}>
            DATE
          </Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body pl={4}>
        {tableData.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell
              px={8}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Avatar.Root size="xs" mr={4}>
                <Avatar.Image src="https://i.pravatar.cc/300?u=iu" />
                <Avatar.Fallback>{item.user}</Avatar.Fallback>
              </Avatar.Root>
              <>{item.user}</>
            </Table.Cell>
            <Table.Cell>{item.commit}</Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>
              <FaTrash color="#9ca3af" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

