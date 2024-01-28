"use client"
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
  let [isOpen, setIsOpen] = useState(true)
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button
        type='button'
        className='btn'
        onClick={openModal}
      >Track
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          
        </Dialog>
    </Transition>
     
    </>
    
  )
}

export default Modal
