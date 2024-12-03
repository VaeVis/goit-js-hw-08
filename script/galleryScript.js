class Gallery {

    constructor(preview, original, description){
        this.preview = preview;
        this.original = original;
        this.description = description;
        this.currentElemIndex === null;
        
    }

    //metody - dodawnaie elementów DOM

    addElements(id) {
        const listElem = document.createElement('li');
        listElem.classList.add('gallery-item');
        listElem.id = id;

        const linkElem = document.createElement('a');
        linkElem.classList.add('gallery-link')
        linkElem.href = this.original;

        const imgElem = document.createElement("img");
        imgElem.classList.add('gallery-image');
        imgElem.src = this.preview;
        imgElem.dataset.source = this.original;
        imgElem.alt = this.description;
    
        linkElem.appendChild(imgElem);
        listElem.appendChild(linkElem);

        return listElem;
    }
    // idneks
    getCurrentImage() {
        if (this.currentElemIndex === null) return null;
        return this.listElem[this.currentElemIndex] ?? null;
    }

    static render(images, selectContainer) {
        const container = document.querySelector(selectContainer);
        if(!container) {
            console.error('container not found:', selectContainer);
            return;
        }

        images.forEach((imageData, index) => {
            const imagesItem = new Gallery(
                imageData.preview,
                imageData.original,
                imageData.description
            );

            container.appendChild(imagesItem.addElements(index));
        });

        container.style.listStyle = 'none';

        container.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('test');
        
        const linkElem = event.target.closest('.gallery-link');
        if(!linkElem) return;
        
        const src = linkElem.href;
        const description = linkElem.querySelector('img').alt;

        // .open({ src, description });

        });
    }
}

    class Modal {
      constructor() {
        this.lightbox = null; // poczatkowy stan lightboxa
        this.isOpen = false; // poczatkowy stan modala
        this.closeKey(); // zamykanie
      }
    
      // Otwieranie okna modalnego
      open({ src, description }) {
        const modalContent = `
          <div id="lightbox" style="text-align: center;">
            <img src="${src}" alt="${description}" style="max-width: 90%; max-height: 90%;" />
            <p>${description}</p>
          </div>
        `;
    
        // Tworzenie modala ze zdefiniowanego diva i nadawanie stanów
        this.lightbox = basicLightbox.create(modalContent, {
          onShow: () => {
            this.isOpen = true; // true jak otwarty
          },
          onClose: () => {
            this.isOpen = false; // false jak nie otwarty
          },
        });
    
        this.lightbox.show(); // pokaz modal
      }
    
      // Zamknij modal
      close() {
        if (this.lightbox) {
          this.lightbox.close();
        }
      }
    
      // Dodanie obsługi klawisza Escape
      closeKey() {
        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && this.isOpen) {
            this.close(); // zamknij jak open true i esc
          }
        });
      }
    }


const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
  // const modal jako new?
  Gallery.render(images, '.gallery');
  