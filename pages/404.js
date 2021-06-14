import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Notfound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
              //router.go(1)--- this is for next page
              //router.go(-1)---this is for back page
              router.push('/');
        }, 3000)
    }, [])


    return (
        <div className="not-found">
            <h1>Oooooops..</h1>
            <h2>Page is not found</h2>

            <p>Go back to
                <Link href="/"><a> Homepage</a></Link>
            </p>

        </div>
    );
}

export default Notfound;