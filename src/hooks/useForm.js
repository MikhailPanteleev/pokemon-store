import {useCallback, useState} from 'react';

export default (initialValue) => {
   const [formValues, setValues] = useState(initialValue);

   const handleChange = useCallback((event) => {
      event.preventDefault();
      const {name, value} = event.target;

      setValues({
         ...formValues,
         [name]: value,
      });
   }, [formValues]);

   const handleReset = useCallback(() => {
      setValues(initialValue);
   }, []);

   return [formValues, handleChange, handleReset];
};