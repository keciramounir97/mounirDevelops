import "./styles/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mo Develops. All rights reserved.
        </p>
      </footer>
    </>
  );
}
