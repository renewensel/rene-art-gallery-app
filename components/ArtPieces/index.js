import styled from "styled-components";
import Image from "next/image";

const StyledArtistName = styled.i`
  font-weight: 200;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-family: "Courier New", monospace;
  background-color: white;
`;

const StyledListItem = styled.li`
  margin: 0;
  padding: 15px;
  border-bottom: 4px dotted #333;
  transition: background-color 0.3s;
  font-weight: bold;
  font-size: calc(14px + 1vw); /* Adjust the base font size as needed */
  position: relative; /* Position relative for absolute positioning of year and genre */

  &:hover {
    background-color: #e0e0e0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StyledPieceDetails = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  font-size: 12px; /* Adjust the font size for piece.year and piece.genre */
`;

const StyledImageContainer = styled.div`
  max-height: 50px; /* Limit the height of the image container to a maximum of 50px */
  margin-right: 10px; /* Add some margin to separate the image from text */
`;

export function ArtPieces({ pieces }) {
  const longestNameLength = Math.max(
    ...pieces.map((piece) => piece.name.length)
  );

  return (
    <>
      <h2>Hello from ArtPieces Component!</h2>
      <StyledList>
        {pieces.map((piece, index) => (
          <StyledListItem
            key={piece.slug}
            style={{ fontSize: `calc(14px + ${40 / longestNameLength}vw)` }}
          >
            <StyledImageContainer>
              <Image
                src={piece.imageSource}
                width={50} // Set a fixed width of 50px
                height={50} // Set a fixed height of 50px
                alt="Picture of the author"
                layout="fixed" // Use fixed layout for fixed width and height
                objectFit="cover" // Maintain aspect ratio and cover the container
              />
            </StyledImageContainer>
            {piece.name} <StyledArtistName>{piece.artist}</StyledArtistName>
            <StyledPieceDetails>
              <p>Year: {piece.year}</p>
              <p>Genre: {piece.genre}</p>
            </StyledPieceDetails>
            {index !== pieces.length - 1}
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}
