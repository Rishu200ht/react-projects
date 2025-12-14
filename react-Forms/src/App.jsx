import './App.css'
import { useForm} from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();


  async function onSubmit(data){
    await new Promise((resolve)=> setTimeout(resolve, 2000));
    console.log("Form data is :", data);
  }


  return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>First Name : 
              <input className={errors.firstName ? 'error-input' : ''}
              {...register('firstName', 
                { 
                  required : true, 
                  minLength : {value : 3, message : 'Min lenght should be 3'},
                  maxLength : {value : 6, message : 'max length atmost 6'}
                  })}/>
                  {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
            </label>

            <br />

            <label>Middel Name : 
              <input className={errors.middelName ? 'error-input' : ''}
              {...register('middelName')}/>
            </label>

            <br />

            <label>Last Name : 
              <input className={errors.lastName ? 'error-input' : ''}
              {...register('lastName',
              {
                  pattern : {
                  value : /^[A-Za-z]+$/i,
                  message : 'Last name is not as per rules'
                }
              }
            )}/>
              {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
            </label>

            <br />

             <button type='submit' 
             disabled={isSubmitting}>
             {isSubmitting ? "Submitting" : "Submit"}
              </button>
          </div>
        </form>
  )
}

export default App
