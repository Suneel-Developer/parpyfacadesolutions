'use client';

export default function MapSection() {
    return (
        <section>
            <div className="mx-10 my-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28352.764666377003!2d153.01119076214107!3d-27.341480082888218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93e2bae6fbcf9d%3A0x502a35af3de88f0!2sFitzgibbon%20QLD%204018%2C%20Australia!5e0!3m2!1sen!2snp!4v1715681505923!5m2!1sen!2snp"
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: '20px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
