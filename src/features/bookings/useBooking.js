import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    // queryFn: fetch('')
    queryFn: () => getBooking(bookingId),
    retry: false, // no point in retrying fetch data 3 times when it fails
  });

  return { isLoading, error, booking };
}
