import { useState, type ComponentPropsWithoutRef, type FormEvent } from "react";
import "../styles/Feedback.css";

type FeedbackProps = {
  minRating: number;
  maxRating: number;
  text: string;
  sliderDefaultValue: number;
  sliderLabel: string;
  textBoxPlaceholder: string;
  detailsThreshold: number;
  onClose: () => void;
  onSubmitFeedback: (feedbackRequest: FeedbackRequest) => void | Promise<void>;
} & ComponentPropsWithoutRef<"form">;

export type FeedbackRequest = {
  rating: number;
  details?: string;
  page: string;
};

export default function Feedback({
  minRating,
  maxRating,
  text,
  sliderLabel,
  sliderDefaultValue,
  textBoxPlaceholder,
  detailsThreshold,
  onClose,
  onSubmitFeedback,
  className,
  ...rest
}: FeedbackProps) {
  const [rating, setRating] = useState<number>(sliderDefaultValue);
  const [details, setDetails] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const page = window.location.href;

    const feedbackRequest: FeedbackRequest = details
      ? { rating, details, page }
      : { rating, page };

    await onSubmitFeedback(feedbackRequest);

    setRating(sliderDefaultValue);
    setDetails("");
    onClose();
  }

  return (
    <form
      className={`${className} feedback-form`}
      onSubmit={handleSubmit}
      {...rest}
    >
      <h1>{text}</h1>
      <label htmlFor="feedback-slider">{sliderLabel}</label>
      <input
        id="feedback-slider"
        type="range"
        min={minRating}
        max={maxRating}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      {rating <= 2 && (
        <input
          type="text-box"
          id="feedback-text-box"
          placeholder={textBoxPlaceholder}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      )}
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </form>
  );
}
