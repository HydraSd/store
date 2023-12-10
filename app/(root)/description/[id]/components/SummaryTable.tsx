import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Total from "./Total";
import Quantity from "./Quantity";

type Props = {
  title?: string;
  category?: string;
  type?: string;
  diliveryPeriod?: string;
  price?: number;
  diliveryFee?: number;
};

function SummaryTable({ title, category, type, diliveryPeriod, price, diliveryFee }: Props) {
  const total = price! + diliveryFee!;
  return (
    <div className="mt-5 p-2 bg-white">
      <div className="text-lg font-semibold">Summary</div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>{title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>{category} - {type}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>Dilivery period</TableCell>
            <TableCell>{diliveryPeriod}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>
            {price?.toLocaleString("en-US", {
              style: "currency",
              currency: "LKR", // Change the currency code as needed
            })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dilivery Fee</TableCell>
            <TableCell>
              {/* {" "}
              {diliveryFee?.toLocaleString("en-US", {
                style: "currency",
                currency: "LKR", // Change the currency code as needed
              })} */}
              <div>Delivery costs can change depending on the quantity and certain circumstances.</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Quantity</TableCell>
            <TableCell><Quantity /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Total</TableCell>
            <TableCell className="font-semibold">
              <Total price={price} diliveryFee={diliveryFee}/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default SummaryTable;
