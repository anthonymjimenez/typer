import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const LikeList = ({ postLikes, usersObject }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        Likes {postLikes.length}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>People who like this post!</ModalHeader>
        <ModalBody>
          {postLikes.map((userId) => (
            <div>
              <h6>
                <Link to={`user/${usersObject[userId].username}`}>
                  {" "}
                  User: {usersObject[userId].username}
                </Link>{" "}
              </h6>
              <p>
                <strong>{usersObject[userId].bio} </strong>
              </p>
            </div>
          ))}{" "}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default LikeList;
