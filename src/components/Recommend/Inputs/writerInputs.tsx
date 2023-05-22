import { useState } from "react";
import { UilMultiply } from "@iconscout/react-unicons";
import { ItmBtn, MenuList } from "./genreInputs";
import { styled } from "styled-components";

export const WriterBtn = styled(ItmBtn)`
  background-color: ${(props) => props.theme.mainYellow};
  margin-top: 0;
`;

export const PlusBtn = styled.button`
  width: 24px;
  background-color: #dee2e6;
  color: #868e96;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 5px;
`;

export const InputBlank = styled.input`
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
