import { Button } from "./ui/button";

export const TicketCounter: React.FC<{
  ticketCount: number;
  setTicketCount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ ticketCount, setTicketCount }) => {
  const increaseTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  const decreaseTicket = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Button variant={"outline"} onClick={decreaseTicket}>
        -
      </Button>
      <span className="text-lg font-semibold">{ticketCount}</span>
      <Button variant={"outline"} onClick={increaseTicket}>
        +
      </Button>
    </div>
  );
};
