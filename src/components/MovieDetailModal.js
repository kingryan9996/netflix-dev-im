import { Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";

function MovieDetailModal(props) {
  console.log(props.movieYoutubeId);

  const opts = {
    height: "450",

    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/ 참고
      autoplay: 0,
    },
  };

  return (
    <Modal
      bg="danger"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          공식 예고편
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube
          videoId={props.movieYoutubeId}
          opts={opts}
          onReady={(e) => e.target.pauseVideo()}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieDetailModal;
