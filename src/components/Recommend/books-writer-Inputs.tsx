import { useState } from "react";
import { UilMultiply } from "@iconscout/react-unicons";
import { ItmBtn, MenuList } from "./genre-gender-inputs";
import { styled } from "styled-components";
import { ReactComponent as Necessary } from "../../assets/necessary.svg";

const WriterBtn = styled(ItmBtn)`
  background-color: ${(props) => props.theme.mainYellow};
  margin-top: 0;
`;

const PlusBtn = styled.button`
  width: 24px;
  background-color: #dee2e6;
  color: #868e96;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 5px;
`;
const InputDiv = styled.div`
  height: 250px;
  width: 350px;
  overflow: scroll;
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
  padding-right: 20px;
`;
const InputBlank = styled.input`
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  height: 30px;
  width: 80%;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  color: #64655f;
`;
const BookInputWrapper = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
`;

interface RecBook {
  title: string;
  rating: number | null;
}

interface BookInputsProps {
  books: RecBook[];
  setBooks: React.Dispatch<React.SetStateAction<RecBook[]>>;
}

export const BookInputs: React.FC<BookInputsProps> = ({ books, setBooks }) => {
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

interface WriterProps {
  writers: string[];
  setWriters: React.Dispatch<React.SetStateAction<string[]>>;
}

const WriterInputs: React.FC<WriterProps> = ({ writers, setWriters }) => {
  const [writer, setWriter] = useState<string>("");
  const onWriterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const AddWriter = () => {
    if (writers.includes(writer)) {
      setWriter("");
      return;
    } else {
      setWriter("");
      setWriters([...writers, writer]);
    }
  };
  const removeWriter = (value: string) => {
    setWriters(writers.filter((itm) => itm !== value));
  };

  return (
    <div>
      <InputBlank
        placeholder="선호하는 작가"
        required
        value={writer}
        onChange={(e) => onWriterChange(e)}
      />
      <PlusBtn onClick={AddWriter}>+</PlusBtn>
      <MenuList>
        {writers.map((itm, idx) => (
          <WriterBtn key={idx}>
            {itm}
            <button>
              <UilMultiply onClick={() => removeWriter(itm)} />
            </button>
          </WriterBtn>
        ))}
      </MenuList>
    </div>
  );
};

export default WriterInputs;
