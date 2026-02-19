package backend.model;

import jakarta.persistence.*;
/**
 * JPA entity representing a pizza in the system.
 *
 * <p>
 * This class is mapped to the database table {@code Pizza} and is managed
 * by the JPA provider. It defines the structure of a pizza
 * record as stored in the relational database.
 * </p>
 *
 * <p>
 * The {@code id} field serves as the primary key and is automatically
 * generated using the {@link GenerationType#IDENTITY} strategy,
 * meaning the database is responsible for generating unique identifiers.
 * </p>
 *
 * <p>
 * The remaining fields represent the business attributes of a pizza:
 * <ul>
 *     <li>{@code name} – the display name of the pizza</li>
 *     <li>{@code description} – textual description of ingredients or details</li>
 *     <li>{@code imageUrl} – reference to an image resource</li>
 *     <li>{@code price} – monetary value of the pizza</li>
 *     <li>{@code soldOut} – indicates whether the pizza is currently unavailable</li>
 * </ul>
 * </p>
 *
 * <p>
 * Instances of this entity are persisted, retrieved, updated, and deleted
 * via Spring Data JPA repositories using ORM (Object-Relational Mapping).
 * </p>
 */

@Entity
@Table(name="Pizza")
public class Pizza {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    private String name;
    private String description;
    private String imageUrl;
    private double price;
    private boolean soldOut;

    public Pizza() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public double getPrice() {
        return price;
    }

    public boolean isSoldOut() {
        return soldOut;
    }
}
