import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export const FileUploader: React.FC<{ onChange: (file?: File) => void }> = ({ onChange }) => {
  const [file, setFile] = useState<File>()
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: ['application/pdf'],
    multiple: false,
    noDrag: true
  })
  useEffect(() => {
    setFile(acceptedFiles[0])
  }, [acceptedFiles])

  useEffect(() => {
    onChange(file)
  }, [file])

  return file ? (
    <>
      <span>{file.name}</span>
      <span onClick={() => setFile(undefined)}>delete</span>
    </>
  ) : (
    <button type="button" {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
    </button>
  )
}
