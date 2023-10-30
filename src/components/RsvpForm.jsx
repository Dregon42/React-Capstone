import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { useDispatch } from 'react-redux';
import { chooseGuest_1, chooseGuest_2, chooseMessage } from '../redux/silces/RsvpSlice';
import { server_calls } from '../api/server'

export default function RsvpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data)
    // dispatch to update Redux store
    dispatch(chooseGuest_1(data.guest_1));
    dispatch(chooseGuest_2(data.guest_2));
    dispatch(chooseMessage(data.message));
  
    server_calls.create(data)
      .then((response) => {
        if (response) {
          console.log('Data saved successfully');
          handleClose();
        } else {
          console.error('Failed to save data');
        }
      })
      .catch((error) => {
        console.error('Error while saving data:', error);
      });
  };
  

  return (
    <div>
        <button
            type="button"
            className='text-2xl bg-gold hover:bg-yellow-900 text-blue-900 shadow-lg hover:shadow-gold rounded-full border border-3 hover:bottom-5 border-white hover:text-white p-2 px-4 font-bold cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-2xl'
            onClick={handleOpen}
            >
        RSVP
        </button>


      <Modal
        open={open}
        onClose={handleClose} 
        closeAfterTransition
      >
        <Fade in={open}>
          <div className="m-20 px-96">
            <h1 className='text-white'>RSVP</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-bleach_almond p-4 rounded-md">
              <div className="mb-4">
                <input
                  type="text"
                  {...register("guest_1", { required: true })}
                  className="bg-white p-2 rounded-md w-full"
                  placeholder="Guest 1"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  {...register("guest_2")}
                  className="bg-white p-2 rounded-md w-full"
                  placeholder="Guest 2"
                />
              </div>
              <div className="mb-4">
                <textarea
                  {...register("message")}
                  className="bg-white p-2 rounded-md w-full"
                  placeholder="Message"
                  cols="10"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  onClick={handleClose}
                  className="font-bold h-10 rounded-full border-y-2 ml-44 w-2/5 text-bleach_almond bg-burgundy transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:drop-shadow-2xl cursor-pointer"
                />
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
