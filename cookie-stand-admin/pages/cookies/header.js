import Link from 'next/link';
const Header = (props)=>{
    const {counter, title} = props;
    return(
        <header className='h-12 bg-emerald-500'>
        <nav className='flex justify-between'>
          <div className='p-3 text-lg font-medium'> 
          <h1 >Cookie Stand Admin</h1>
          </div>
          <div>
          <Link href="cookies/Overview">
                <a className='m-4'>Career</a>
            </Link>
          </div>
        </nav>
      </header>
    )
}
export default Header