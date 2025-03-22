export class Celular {
    
    private marca: string;
    private modelo: string;
    private sistemaOperativo: string;
    private memoriaRAM: number;
    private almacenamientoInterno: number;
    private estadoEncendido: boolean;

    constructor(
        marca: string,
        modelo: string,
        sistemaOperativo: string,
        memoriaRAM: number = 4,
        almacenamientoInterno: number = 64,
        estadoEncendido: boolean = false
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperativo = sistemaOperativo;
        this.memoriaRAM = memoriaRAM;
        this.almacenamientoInterno = almacenamientoInterno;
        this.estadoEncendido = estadoEncendido;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getSistemaOperativo(): string {
        return this.sistemaOperativo;
    }

    public setSistemaOperativo(sistemaOperativo: string): void {
        this.sistemaOperativo = sistemaOperativo;
    }

    public getMemoriaRAM(): number {
        return this.memoriaRAM;
    }

    public setMemoriaRAM(memoriaRAM: number): void {
        this.memoriaRAM = memoriaRAM;
    }

    public getAlmacenamientoInterno(): number {
        return this.almacenamientoInterno;
    }

    public setAlmacenamientoInterno(almacenamientoInterno: number): void {
        this.almacenamientoInterno = almacenamientoInterno;
    }

    public getEstadoEncendido(): boolean {
        return this.estadoEncendido;
    }

    public setEstadoEncendido(estadoEncendido: boolean): void {
        this.estadoEncendido = estadoEncendido;
    }

    public encenderApagar(): void {
        this.estadoEncendido = !this.estadoEncendido;
    }

    public mostrarInfo(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Sistema Operativo: ${this.sistemaOperativo}, RAM: ${this.memoriaRAM}GB, Almacenamiento: ${this.almacenamientoInterno}GB, Estado: ${this.estadoEncendido ? "Encendido" : "Apagado"}`;
    }
}

