import { ReactComponent as Necessary } from "../../../assets/svg/necessary.svg";
import { useState } from "react";
import { UilMultiply } from "@iconscout/react-unicons";
import { MenuList } from "./genre-inputs";
import { styled } from "styled-components";
import { InputBlank, PlusBtn, WriterBtn } from "./writer-inputs";

const BookInputWrapper = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
`;

const InputDiv = styled.div`
  height: 250px;
  width: 350px;
  overflow: scroll;
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
  padding-right: 20px;
`;
interface RecBook {
  title: string;
  rating: number | null;
}

interface BookInputsProps {
  books: RecBook[];
  setBooks: React.Dispatch<React.SetStateAction<RecBook[]>>;
}

const BookInputs: React.FC<BookInputsProps> = ({ books, setBooks }) => {
  const [book, setBook] = useState<string>("");
  const [rate, setRate] = useState<number | null>(null);

  const onBookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook(e.target.value);
  };

  const AddBook = () => {
    if (books.find((b) => b.title === book)) {
      setBook("");
      setRate(null);
      return;
    } else {
      setBook("");
      setRate(null);
      setBooks([...books, { title: book, rating: rate }]);
    }
  };

  const removeBook = (value: string) => {
    setBooks(books.filter((itm) => itm.title !== value));
  };

  return (
    <InputDiv>
      <div style={{ display: "flex" }}>
        <Necessary style={{ marginRight: "3px" }} />
        <BookInputWrapper>
          <InputBlank
            placeholder="책 제목"
            required
            value={book}
            onChange={(e) => onBookChange(e)}
          />
          <InputBlank
            type="number"
            step="0.1"
            min="0.0"
            max="5.0"
            placeholder="평점 / 5.0"
            required
            value={rate || ""}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
          <PlusBtn onClick={AddBook} disabled={book === "" || rate === null}>
            +
          </PlusBtn>
        </BookInputWrapper>
      </div>
      <MenuList>
        {books.map((itm, idx) => (
          <WriterBtn key={idx}>
            {itm.title}
            <button>
              <UilMultiply onClick={() => removeBook(itm.title)} />
            </button>
          </WriterBtn>
        ))}
      </MenuList>
    </InputDiv>
  );
};

export default BookInputs;
