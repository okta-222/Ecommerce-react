import styled from "@emotion/styled";

export const HistorySection = styled("div")`
  label: HistorySection;
  margin-top: 2rem;
  margin-bottom: 6rem;
`;

export const HistoryWrapper = styled("div")`
  label: HistoryWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.2rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const HistoryLeft = styled("div")`
  label: HistoryLeft;
  width: 25%;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.274);
  background-color: white;
  border-radius: 6px;
  padding-bottom: 1rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const HistoryRight = styled("div")`
  label: HistoryRight;
  width: 73%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TitleHistoryLeft = styled("h2")`
  label: TitleHistoryLeft;
  padding: 2rem 0 1rem 1.5rem;
  font-weight: normal;
`;
export const CardHistory = styled("div")`
  label: CardHistory;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 1rem 0 1rem 1.5rem;
  transition: var(--main-transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #20b30e;
    right: -100%;
    top: 0;
  }

  &:hover {
    background-color: #edf2ee;
    &::before {
      left: 0;
    }
  }
`;
export const TitleCard = styled("h4")`
  label: TitleCard;
  font-size: 0.9rem;
  color: #20b30e;
`;

export const HistoryRightBottom = styled("div")`
  label: HistoryRightBottom;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  padding: 0 0 0 0.5rem;
`;
export const TitleHistoryBottom = styled("h3")`
  label: TitleHistoryBottom;
  text-transform: capitalize;
  padding: 0.5rem;
  font-weight: bold;
`;
export const TableHistoryRight = styled("table")`
  label: TableHistoryRight;
  width: 100%;
  height: 40rem;
  padding-bottom: 1rem;
`;
export const TrTable = styled("tr")`
  label: TrTable;
  text-align: center;
  background-color: #f2f2f2;
  height: 3rem;
  border: none;
  padding-left: 0.5rem;
`;
export const ThTable = styled("th")`
  label: ThTable;
  color: #777;
`;
export const TdTable = styled("td")`
  label: TdTable;
  font-size: 0.9rem;
  padding-left: 1.5rem;
`;
export const TdTableDetails = styled("td")`
  label: TdTableDetails;
  font-size: 0.9rem;
  padding-left: 1.5rem;
  cursor: pointer;
  color: #20b30e;
`;
