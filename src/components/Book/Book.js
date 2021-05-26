import React from "react";
import {
  HiAcademicCap,
  HiCheckCircle, HiMinusCircle, HiPlusCircle
} from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { addToFinishedList, addToReadingList, removeFromReadingList } from "../../redux/actions/bookAction";
import styles from './book.module.css';

const SingleBook = ({book}) => {
  const { id,title, author, coverImageUrl, synopsis } = book;
  const dispatch=useDispatch()
   // get book list from redux store
   const readingBookList = useSelector((state) => state.books.readingBookList);
   const finishedBookList = useSelector((state) => state.books.finishedBookList);
    // check is exist or not in reading and finished list
  const inReadingList = !!readingBookList?.find((book) => book.id === id);
  const inFinishedList = !!finishedBookList?.find((book) => book.id === id);
  return (
    <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        {/* show ADD button if not exist in reading and finished list */}
        {!inFinishedList && !inReadingList && (
        <HiPlusCircle title="Add to Reading" className={styles.plus_icon} onClick={()=>dispatch(addToReadingList(book))}/>
        )}
        {/* show remove and finish button if exist in reading list */}
        {inReadingList && (
          <>
            <HiMinusCircle
              onClick={() => dispatch(removeFromReadingList(id))}
              title="Remove from list"
              className={styles.minus_icon}
            />
            <HiCheckCircle
              onClick={() => dispatch(addToFinishedList(book))}
              title="Mark as Finish"
              className={styles.check_icon}
            />{" "}
          </>
        )}
        {/* show Complete badge if exist in finished list */}
        {inFinishedList && (
          <HiAcademicCap title="Completed" className={styles.plus_icon} />
        )}
        {/* <HiCheckCircle title="Mark as Finish" className={styles.check_icon} /> */}
      </div>
    </div>
  );
};

export default SingleBook;
