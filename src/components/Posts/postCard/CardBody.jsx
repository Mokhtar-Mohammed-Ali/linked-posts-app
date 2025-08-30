
import {
  Modal,
  ModalContent,
 
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function CardBody({ body, image }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return <>
<div onClick={onOpen}> 
    {body && <p className='italic text-lg text-gray-600 py-4'>{`${body.slice(0,30)}  `} <span className="text-blue-600 cursor-pointer">Read More...</span> </p>}
    {image  && <img src={image} alt="post photo" className='w-full md:h-75 lg:h-120 object-cover rounded cursor-pointer' />}

</div>
 
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              
              <ModalBody>
               
                      {body && <p className='italic text-lg text-gray-600 py-4'>{body} </p>}

                  {image && <img src={image} alt="post photo" className='w-full h-100 object-cover rounded' />}

                
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
       
      </Modal>
 

  </>
}
