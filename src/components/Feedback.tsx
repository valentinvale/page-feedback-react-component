import { useState, type ComponentPropsWithoutRef } from "react";

type FeedbackProps = {
  maxRating: number;
  text: string;
  sliderDefaultValue: number;
  sliderLabel: string;
  textBoxPlaceholder: string;
  detailsThreshold: number;
  currentPage: string;
  onClose: () => void;
} & ComponentPropsWithoutRef<"form">;

export default function Feedback({
  maxRating,
  text,
  sliderLabel,
  sliderDefaultValue,
  textBoxPlaceholder,
  detailsThreshold,
  currentPage,
  onClose,
  className,
  ...rest
}: FeedbackProps) {
  const [rating, setRating] = useState<number>(sliderDefaultValue);

  return (
    <form className={`${className} feedback-form`} {...rest}>
      <h1>{text}</h1>
      <label htmlFor="feedback-slider">{sliderLabel}</label>
      <input
        id="feedback-slider"
        type="range"
        max={maxRating}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      {rating <= 2 && (
        <input
          type="text-box"
          id="feedback-text-box"
          placeholder={textBoxPlaceholder}
        />
      )}
      <button>Submit</button>
      <button onClick={onClose}>Close</button>
    </form>
  );
}
