import { useState } from 'react';
import '../../../src/Css/Mainpage/Uploadsection/Uploadarea.css'
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react';
import Filecontainer from '../../Component/Filecontainer'
import { CiSearch } from "react-icons/ci";
/**
 * UploadArea Component
 * 
 * This component provides a user interface for uploading documents. It includes a modal for adding documents,
 * a drag-and-drop area for file uploads, and a search bar for filtering modules.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered UploadArea component.
 * 
 * @example
 * <UploadArea />
 * 
 * @state {boolean} uploadModal - Controls the visibility of the upload modal.
 * @state {boolean} dragState - Indicates whether a file is being dragged over the drop area.
 * 
 * @ref {React.RefObject} fileInputRef - A reference to the hidden file input element.
 * 
 * @function handleUploadClick - Triggers the file input click event to open the file picker.
 * @param {React.MouseEvent} e - The click event.
 * 
 * @function onFileDrop - Handles the file drop event and processes the dropped files.
 * @param {React.DragEvent} e - The drag event.
 * 
 * @function handleDrag - Handles the drag event to update the drag state.
 * @param {React.DragEvent} e - The drag event.
 */


function UploadArea(){
  const [uploadModal , setUploadModal] = useState(false);
  const fileInputRef = useRef(null);
  const [dragState , setDrag] = useState(false);
  const [files , setFiles] = useState([]);

  {/*handleFileChange is responsible for updating the state with the selected files*/}
  const handleFileChange = (e) => {
     if(e.target.files && e.target.files.length > 0){
       setFiles(Array.from(e.target.files));
     }
  };

   {/*openFilePicker is responsible for triggering the file input click event*/}
  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }


  return(
    <>
       <div className="Uploadarea-content">

          <div className="Uploadarea-body">
            <div className="Uploadarea-body-header">
                <h1>Modules</h1>
                <br />
                <hr />
               
               {/* The Uploadarea-search div contains a search input and an add button */}
                <div className="Uploadarea-search">
                  <div className="search-content">
                     <input type="text" placeholder='Search' name="Upload-search-box" id="Upload-search-box" />
                     <CiSearch size={'3%'}/>
                  </div>
                     <IoIosAdd className='add-button' onClick={() => setUploadModal(true)} />
                </div>
                {/* The Uploadarea-data-area div contains the uploaded files */}
                <div className="Uploadarea-data-area">
                  
               </div>
               
            </div>

          </div>
       </div>
       {/* The uploadModal dialog is conditionally rendered based on the uploadModal state */}
       {/* It contains a form for uploading documents, including a title input and a drag-and-drop area */}
       {uploadModal && 
         <dialog className='uploadModal' open>
           <div className="uploadModal-box">
           <div className="uploadModal-box-header">
             <p>Add Documents</p>
             <IoMdClose onClick={() => setUploadModal(false)} className='upload-exit-button'/>
              
           </div>
           <hr />
           <div className="uploadModal-box-body">
  
             <label htmlFor="Module-name">Title</label>
             <br />
             <input type="text" name='Module-name' className='Document-title-input'/>  
             
             <div className="Document-upload-box" onClick={openFilePicker} onDragOver={(e) => e.preventDefault()}>
               <p>Drop your files here of choose your file</p>
             </div>

             <div className="Files">
                 {files.map(file => <Filecontainer key={file.name + file} name={file.name} size={file.size} url={URL.createObjectURL(file)}/>)}
             </div>

             {/* The upload-button triggers the file input click event to open the file picker */}
             <button className="upload-button">
                   Upload
             </button>
             <input type="file" hidden ref={fileInputRef} multiple onChange={handleFileChange} />

         

           </div>
           </div>
         </dialog>
       }
         
    </>
  );
}
export default UploadArea;