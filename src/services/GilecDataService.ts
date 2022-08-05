import Gilec from "@/Models/Gilec";

class GilecDataService {
    getAll(): Promise<any> {
        return  fetch('citizens/Get');
    }
    get(id: any): Promise<any> {
        return  fetch(`citizens/GetById?id=${id}`);
    }
    create(gil: any): Promise<any> {
        return fetch(`citizens/Add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gil),
        });
    }
    update(gil: Gilec): Promise<any> {
        return fetch(`citizens/Update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gil),
        });
    }
    delete(id: any): Promise<any> {
        return fetch(`citizens/Delete?id=${id}`);
    }
    // findByTitle(title: string): Promise<any> {//сомнительная штука, надо бы сортирнуть на фронте 
    //     return fetch(`citizens?title=${title}`);
    // }
}
export default new GilecDataService();