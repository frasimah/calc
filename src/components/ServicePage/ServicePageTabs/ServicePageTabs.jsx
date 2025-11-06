import { v4 as uuidv4 } from 'uuid';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive'
import './ServicePageTabs.scss'
// removed unused import

function ServicePageTabs({ activeTab = 1, onTabClick }) {
   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
   const tabsList = [
      {
         title: 'Segment Scoring',
         id: '1',
         keyId: uuidv4(),
      },
      {
         title: 'Retargeting Trigger Leads',
         id: '2',
         keyId: uuidv4(),
      },
      {
         title: 'Call Center',
         id: '3',
         keyId: uuidv4(),
      }
   ]

   const options = tabsList.map(item => ({
      value: item.id,
      label: item.title,
   }));

   const handleChange = selectedOption => {
      onTabClick(selectedOption.value);
   };
   return (
      <div className="service_page_tabs">
         {!isMobile ? (
            tabsList.map((item, index) => (
               <button
                  key={item.keyId}
                  type="button"
                  aria-label={item.title}
                  data-id={item.id}
                  className={`service_page_tabs-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => onTabClick(item.id)}
               >
                  {item.title}
               </button>
            ))
         ) : (
            <Select
               options={options}
               isSearchable={false}
               value={options.find(option => option.value === activeTab)}
               onChange={handleChange}
               classNamePrefix="react-select"
               aria-label="Select a service tab"
               className='react-select'
            />
         )}
      </div>
   );
}

export default ServicePageTabs;