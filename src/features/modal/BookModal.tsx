import React from "react";
import { VolumeInfo } from "types";
import Heading from "components/ui/typography/Heading";
import Underline from "components/ui/typography/Underline";
import Modal from "components/ui/modals/Modal";
import { useAppSelector } from "lib/hooks";
import Paragraph from "components/ui/typography/Paragraph";
import { RemoveScroll } from "react-remove-scroll";
import Thumbnail from "../../components/ui/image/Thumbnail";

const BookModal: React.FC = () => {
  const { imageLinks, categories, title, authors, description } =
    useAppSelector((state) => state.books.selectedBook) as VolumeInfo;

  return (
    <RemoveScroll>
      <Modal>
        <div className="flex flex-col md:flex-row w-full h-full pt-10 gap-4 overflow-y-auto">
          <Thumbnail
            className="w-64 h-96"
            src={imageLinks?.thumbnail || imageLinks?.large}
          />
          <div className="flex flex-col gap-y-2">
            <Underline className="text-gray-300">
              {categories ? categories.join(", ") : "No categories"}
            </Underline>
            <Heading className="text-2xl">{title}</Heading>
            <Paragraph className="text-gray-300">
              {authors ? authors.join(", ") : "No authors"}
            </Paragraph>
            <Paragraph className="break-words overflow-y-auto">
              {description || "No description"}
            </Paragraph>
          </div>
        </div>
      </Modal>
    </RemoveScroll>
  );
};

export default BookModal;
