import iconGaia from '../assets/logo-gaia-icon.png';
import ExampleDoliprane from '../assets/ExampleDoliprane.png';
import ExampleScanDoli from '../assets/ExampleScanDoliprane.png';
import ExampleScanPrescriptionBefore from '../assets/ExampleScanPrescriptionBefore.png';
import ExampleScanPrescription from '../assets/ExampleScanPrescription.png';
import { ArrowRight } from 'react-feather';

const ContentScan = () => {
    return (
        <div id="contentScan" className="flex items-center justify-center h-[900px]">
            <div className='flex flex-col items-center justify-start w-full'>
                <h4 className='text-base lg:text-xl text-lime-500 font-medium'>Scanner vos ordonnances et médicaments</h4>
                <div className='flex justify-center items-center'>
                    <img src={iconGaia} alt="Icon Gaia" className="w-[100px] h-[100px]" style={{
                        filter: 'invert(86%) sepia(15%) saturate(5047%) hue-rotate(25deg) brightness(95%) contrast(101%)'
                    }} />
                    <h3 className='text-6xl font-medium text-gray-800'>
                        Scan & recherche de produits médicaux
                    </h3>
                </div>

                <div className='flex flex-col items-center justify-center w-[90%] h-full mt-16 gap-10'>

                    <div className='flex gap-[5%]'>
                        <div className='flex flex-col w-[55%] h-full gap-6'>
                            <h5 className='text-4xl text-lime-400 font-semibold'>
                                Scanner vos boîtes de médicaments
                            </h5>
                            <p className='text-2xl text-gray-600 font-light'>
                                Gaia vous permet de <span className='text-lime-500 font-medium'>scanner</span> vos boîte de médicaments afin d'avoir des informations sur
                                le médicament ou d'ajouter vos médicaments dans l'application pour une meilleure gestion de vos médicamnets.
                            </p>
                            <p className='text-2xl text-gray-600 font-light'>
                                Vous pouvez également <span className='text-lime-500 font-medium'>rechercher</span> des produits médicaux grâce à la recherche de médicament.
                            </p>
                            <p className='text-2xl text-gray-600 font-light'>

                            </p>
                        </div>

                        <div className='flex h-full w-[30%] items-center justify-center gap-8'>
                            <img src={ExampleScanDoli} alt="Example of the scan of a doliprane" className='w-[40%]' />
                            <ArrowRight height={50} width={50} className='text-blue-400'></ArrowRight>
                            <img src={ExampleDoliprane} alt="Example of doliprane in Gaia-medication" className='w-[40%]' />
                        </div>
                    </div>

                    <div className='flex gap-[5%]'>
                        <div className='flex flex-col w-[55%] h-full gap-6'>
                            <h5 className='text-4xl text-lime-400 font-semibold'>
                                Scanner vos ordonnances
                            </h5>
                            <p className='text-2xl text-gray-600 font-light'>
                                Gaia vous permet de <span className='text-lime-500 font-medium'>scanner</span> vos ordonnances en un clin d'oeil,
                                pour un ajout simplifiée de vos traitements.
                            </p>
                            <p className='text-2xl text-gray-600 font-light'>
                                Ainsi que les <span className='text-lime-500 font-medium'>informations</span> sur votre médecin traitant et les médicaments prescrits.
                            </p>
                        </div>

                        <div className='flex h-full w-[30%] items-center justify-center gap-8'>
                            <img src={ExampleScanPrescriptionBefore} alt="Example of the scan of a prescription" className='w-[40%]' />
                            <ArrowRight height={50} width={50} className='text-blue-400'></ArrowRight>
                            <img src={ExampleScanPrescription} alt="Example of the scan of a prescription" className='w-[40%]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentScan;