class Thumbnail {
  path: string;
  extension: string;
  pathIncludingExtension: string;
}

class Image {
  path: string;
  extension: string;
  pathIncludingExtension: string;
}

export class ComicIssue {
  id: number;
  title: string;
  description: string;
  seriesNumber: number;
  publicationDate: string;
  publisherId: number;
  publisher: string;
  thumbnail: Thumbnail;
  images: Image[];
}
