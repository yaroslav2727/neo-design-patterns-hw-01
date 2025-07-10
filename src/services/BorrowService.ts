import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isAvailable) {
      console.log("Ця копія недоступна для позики.");
      return false;
    }

    reader.borrowCopy(copy);
    copy.isAvailable = false;

    return true;
  }

  returnCopy(reader: Reader, copy: Copy): void {
    reader.returnCopy(copy);
    copy.isAvailable = true;
  }
}
