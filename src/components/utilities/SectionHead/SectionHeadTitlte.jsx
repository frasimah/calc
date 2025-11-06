function SectionHeadTitlte({ children, className, dangerouslySetInnerHTML, mainTitle }) {
   return (
      mainTitle ? (
         <h1 className={`section_head-title ${className ? className : ''}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
            {children}
         </h1>
      ) : (
         <h2 className={`section_head-title ${className ? className : ''}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
            {children}
         </h2>
      )

   );
}

export default SectionHeadTitlte;