import { useState } from "react";
import "./App.css";
import starIcon from "./assets/star.svg";
import FixedButton from "./components/FixedButton";
import Feedback from "./components/Feedback";

function App() {
  const [feedbackIsVisible, setFeedbackIsVisible] = useState<boolean>(false);

  function handleClickFeedback() {
    setFeedbackIsVisible(true);
  }

  function handleOnCloseFeedback() {
    setFeedbackIsVisible(false);
  }

  return (
    <div className="app-container">
      <header>
        <h1>Welcome To This Example Site</h1>
      </header>
      <main>
        <h2>This is a simple example of a page feedback component</h2>
        <div className="articles-container">
          <div className="article-container">
            <p className="article">
              Mauris in porta purus. Nulla purus lacus, vulputate ac risus ut,
              laoreet fermentum libero. Etiam aliquet feugiat mi non mattis. Nam
              vulputate augue quis velit vehicula vehicula. Duis consequat justo
              in tellus vehicula, ut tristique sapien malesuada. Quisque dictum
              purus eget leo fringilla, sed semper diam faucibus. Suspendisse
              sagittis feugiat sapien vel lobortis. Fusce a orci eleifend,
              sodales risus quis, molestie est. Curabitur dictum dolor eu
              eleifend elementum. Fusce sapien neque, sagittis in risus
              tincidunt, pharetra tempus est. Donec sollicitudin, nulla et
              tristique efficitur, nisl orci cursus lectus, vitae imperdiet
              nulla ipsum sit amet nisl. Aliquam consectetur massa eget finibus
              ultrices. Fusce sit amet ipsum felis. Proin in ligula tincidunt
              neque gravida tempus.
            </p>
          </div>
          <div className="article-container">
            <p className="article">
              Vestibulum vulputate, nunc vel mollis ullamcorper, sem enim
              consectetur nibh, et placerat neque eros vel augue. Nullam vitae
              urna commodo, congue elit nec, scelerisque augue. Nam nisl massa,
              tristique sed quam ut, ornare dignissim enim. Nullam suscipit erat
              quis fringilla hendrerit. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Etiam eleifend quam
              orci, dictum venenatis tortor ultrices id. Proin pulvinar sapien
              vel molestie tincidunt. Ut vulputate, elit eget semper maximus,
              est ante tristique tortor, quis accumsan metus tellus eu justo.
              Aliquam a felis arcu. Curabitur ultricies libero at ex elementum
              congue. Cras aliquam ligula sit amet nunc semper dictum. Vivamus a
              mi id massa bibendum consequat. Curabitur est mauris, rhoncus in
              odio sit amet, volutpat tincidunt elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis quis tempus ex, eu
              accumsan metus. Nulla facilisi
            </p>
          </div>
        </div>
        <FixedButton
          icon={starIcon}
          iconAlt="Star icon"
          text="Give us a feedback!"
          onClick={handleClickFeedback}
        />
        {feedbackIsVisible && (
          <Feedback
            maxRating={5}
            text="Page Feedback"
            sliderDefaultValue={3}
            sliderLabel="Page Rating"
            textBoxPlaceholder="Please offer a more detailed feedback..."
            detailsThreshold={2}
            currentPage="/home"
            onClose={handleOnCloseFeedback}
          />
        )}
      </main>
      <footer>
        <p>&copy; 2023 Example Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
